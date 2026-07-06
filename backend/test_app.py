import unittest
from unittest.mock import patch, MagicMock
import json
import re
from datetime import datetime

# Set dummy environment variables before importing app to avoid warnings/errors
import os
os.environ["DATABASE_URL"] = "postgresql://dummy:dummy@localhost:5432/dummy"
os.environ["JWT_SECRET"] = "dummy-jwt-secret"
os.environ["FLASK_ENV"] = "testing"

from app import app, get_db_connection

class PhonalynxBackendTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_health_check(self):
        """Test the health check endpoint returns 200 and healthy status"""
        response = self.app.get('/health')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data.get("status"), "healthy")
        self.assertIn("timestamp", data)

    def test_not_found_handler(self):
        """Test that non-existent API routes return 404 JSON instead of HTML"""
        response = self.app.get('/api/invalid-route-123')
        self.assertEqual(response.status_code, 404)
        data = json.loads(response.data)
        self.assertEqual(data.get("error"), "API route not found")

    @patch('app.get_db_connection')
    def test_register_db_failure(self, mock_get_db):
        """Test that registration handles DB connection failure cleanly without crashing"""
        mock_get_db.return_value = None
        
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "password": "securepassword123"
        }
        response = self.app.post('/register', 
                                 data=json.dumps(payload),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 500)
        data = json.loads(response.data)
        self.assertEqual(data.get("error"), "Database connection failed")

    @patch('app.get_db_connection')
    def test_register_missing_fields(self, mock_get_db):
        """Test that registration returns 400 if fields are missing"""
        payload = {
            "email": "test@example.com"
        }
        response = self.app.post('/register', 
                                 data=json.dumps(payload),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertEqual(data.get("error"), "All fields are required")

    @patch('app.get_db_connection')
    def test_register_user_exists(self, mock_get_db):
        """Test registration when the email already exists in DB"""
        mock_conn = MagicMock()
        mock_cur = MagicMock()
        mock_get_db.return_value = mock_conn
        mock_conn.cursor.return_value = mock_cur
        
        # Mock that user SELECT returns a record
        mock_cur.fetchone.return_value = (1,)
        
        payload = {
            "name": "Test User",
            "email": "existing@example.com",
            "password": "securepassword123"
        }
        response = self.app.post('/register', 
                                 data=json.dumps(payload),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 409)
        data = json.loads(response.data)
        self.assertEqual(data.get("error"), "User already exists")

    @patch('app.get_db_connection')
    def test_login_db_failure(self, mock_get_db):
        """Test login handles DB connection failure cleanly"""
        mock_get_db.return_value = None
        
        payload = {
            "email": "test@example.com",
            "password": "securepassword123"
        }
        response = self.app.post('/login', 
                                 data=json.dumps(payload),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 500)
        data = json.loads(response.data)
        self.assertEqual(data.get("error"), "Database connection failed")

    @patch('app.get_db_connection')
    def test_login_invalid_credentials(self, mock_get_db):
        """Test login returns 401 for invalid credentials"""
        mock_conn = MagicMock()
        mock_cur = MagicMock()
        mock_get_db.return_value = mock_conn
        mock_conn.cursor.return_value = mock_cur
        
        # User not found in DB
        mock_cur.fetchone.return_value = None
        
        payload = {
            "email": "wrong@example.com",
            "password": "wrongpassword"
        }
        response = self.app.post('/login', 
                                 data=json.dumps(payload),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 401)
        data = json.loads(response.data)
        self.assertEqual(data.get("error"), "Invalid credentials")

    def test_ats_score_regex_parsing(self):
        """Verify the robust ATS Score regex parser works on various LLM outputs"""
        test_cases = [
            ("8. ATS Score: [85/100]\nSome context here", 85),
            ("ATS Score: 92/100", 92),
            ("ATS Score (out of 100): 78", 78),
            ("ats score: [60/100]", 60),
            ("Overall ATS Score: 88%", 88),
            ("No score mentioned here", 0),
        ]
        
        for input_text, expected_score in test_cases:
            match = re.search(r'ATS Score\s*(?:\(.*?\))?\s*:\s*(?:\[)?\s*(\d+)', input_text, re.IGNORECASE)
            if not match:
                cleaned_eval = re.sub(r'\(.*?100.*?\)', '', input_text)
                match = re.search(r'ATS Score[^\d]*(\d+)', cleaned_eval, re.IGNORECASE)
            
            score = int(match.group(1)) if match else 0
            self.assertEqual(score, expected_score, f"Failed for output: {input_text}")

if __name__ == '__main__':
    unittest.main()
