from app import app
from flask import render_template, redirect, flash, url_for
from app.forms import LoginForm

@app.route('/game')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Привет {}'.format(form.username.data))
        return redirect(url_for('index'))
    return render_template('login.html', form=form)