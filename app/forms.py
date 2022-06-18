from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class LoginForm(FlaskForm):
    username = StringField("Введите имя", validators=[DataRequired(message='Поле должно быть заполнено')])
    submit =  SubmitField('Вход')
