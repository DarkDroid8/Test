function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const output = document.getElementById('strength-output');
    
    let strength = 0;
    const criteria = [
        /.{8,}/,         // Minimum 8 characters
        /[a-z]/,         // Lowercase letters
        /[A-Z]/,         // Uppercase letters
        /[0-9]/,         // Digits
        /[^a-zA-Z0-9]/   // Special characters
    ];

    criteria.forEach((regex) => {
        if (regex.test(password)) {
            strength++;
        }
    });

    let strengthText = '';
    switch (strength) {
        case 0:
        case 1:
        case 2:
            strengthText = 'Weak';
            output.style.color = 'red';
            break;
        case 3:
            strengthText = 'Moderate';
            output.style.color = 'orange';
            break;
        case 4:
        case 5:
            strengthText = 'Strong';
            output.style.color = 'green';
            break;
    }

    output.textContent = `Password Strength: ${strengthText}`;
}

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const output = document.getElementById('generated-password');
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    output.textContent = `Generated Password: ${password}`;
}
