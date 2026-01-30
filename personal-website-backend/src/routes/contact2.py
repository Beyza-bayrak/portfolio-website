from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
import re
import pyodbc

contact_bp = Blueprint('contact', __name__)

# SQL Server bağlantı ayarları
def get_db_connection():
    try:
        connection = pyodbc.connect(
            'DRIVER={ODBC Driver 17 for SQL Server};'
            'SERVER=LAPTOP-JBR2TTR6\SQLSERVER2022;'
            'DATABASE=WebAppDB;'
            'Trusted_Connection=yes;'
        )
        return connection
    except Exception as e:
        print(f"SQL Server bağlantı hatası: {e}")
        return None

# E-posta doğrulama
def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

# Telefon doğrulama
def validate_phone(phone):
    pattern = r'^(\+90|0)?[5][0-9]{9}$'
    return re.match(pattern, phone.replace(' ', '').replace('-', '')) is not None

# İletişim Formu - /contact
@contact_bp.route('/contact', methods=['POST'])
@cross_origin()
def handle_contact():
    connection = None
    cursor = None
    
    try:
        data = request.get_json()

        if not data:
            return jsonify({'error': 'Veri bulunamadı'}), 400

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()

        errors = []

        if not name:
            errors.append('Ad Soyad gereklidir')
        elif len(name) < 2:
            errors.append('Ad Soyad en az 2 karakter olmalıdır')

        if not email:
            errors.append('E-posta gereklidir')
        elif not validate_email(email):
            errors.append('Geçerli bir e-posta adresi giriniz')

        if not message:
            errors.append('Mesaj gereklidir')
        elif len(message) < 10:
            errors.append('Mesaj en az 10 karakter olmalıdır')

        if errors:
            return jsonify({'errors': errors}), 400

        # MySQL bağlantısı
        connection = get_db_connection()
        if connection is None:
            return jsonify({'error': 'Veritabanı bağlantısı kurulamadı'}), 500
            
        cursor = connection.cursor()

        # SQL Server'a kayıt
        sql = """
            INSERT INTO contact_messages (name, email, message, created_at)
            VALUES (?, ?, ?, GETDATE())
        """
        cursor.execute(sql, (name, email, message))
        connection.commit()

        return jsonify({
            'success': True,
            'message': 'Mesajınız başarıyla alındı ve veritabanına kaydedildi!'
        }), 200

    except Exception as e:
        if connection:
            connection.rollback()
        return jsonify({'error': f'Veritabanı hatası: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Sunucu hatası oluştu: {str(e)}'}), 500
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()


# Danışmanlık Formu - /consulting
@contact_bp.route('/consulting', methods=['POST'])
@cross_origin()
def handle_consulting():
    connection = None
    cursor = None
    
    try:
        data = request.get_json()

        if not data:
            return jsonify({'error': 'Veri bulunamadı'}), 400

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        phone = data.get('phone', '').strip()
        subject = data.get('subject', '').strip()

        errors = []

        if not name:
            errors.append('Ad Soyad gereklidir')
        elif len(name) < 2:
            errors.append('Ad Soyad en az 2 karakter olmalıdır')

        if not email:
            errors.append('E-posta gereklidir')
        elif not validate_email(email):
            errors.append('Geçerli bir e-posta adresi giriniz')

        if not phone:
            errors.append('Telefon numarası gereklidir')
        elif not validate_phone(phone):
            errors.append('Geçerli bir telefon numarası giriniz (örn: +90 555 123 45 67)')

        if not subject:
            errors.append('Danışılmak istenen konu gereklidir')
        elif len(subject) < 20:
            errors.append('Danışılmak istenen konu en az 20 karakter olmalıdır')

        if errors:
            return jsonify({'errors': errors}), 400

        # MySQL bağlantısı
        connection = get_db_connection()
        if connection is None:
            return jsonify({'error': 'Veritabanı bağlantısı kurulamadı'}), 500
            
        cursor = connection.cursor()

        # SQL Server'a kayıt
        sql = """
            INSERT INTO consulting_requests (name, email, phone, subject, created_at)
            VALUES (?, ?, ?, ?, GETDATE())
        """
        cursor.execute(sql, (name, email, phone, subject))
        connection.commit()

        return jsonify({
            'success': True,
            'message': 'Danışmanlık talebiniz alındı! 24 saat içinde sizinle iletişime geçeceğim.'
        }), 200

    except Exception as e:
        if connection:
            connection.rollback()
        return jsonify({'error': f'Veritabanı hatası: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Sunucu hatası oluştu: {str(e)}'}), 500
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()