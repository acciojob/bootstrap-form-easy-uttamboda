//your code here
const form = document.getElementById('internship-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let isValid = true;

      // Validate First Name
      const firstName = document.getElementById('first-name-input');
      const firstNameFeedback = document.getElementById('first-name-feedback');
      if (!firstName.value) {
        firstName.classList.add('is-invalid');
        firstNameFeedback.style.display = 'block';
        isValid = false;
      } else {
        firstName.classList.remove('is-invalid');
        firstNameFeedback.style.display = 'none';
      }

      // Validate Last Name
      const lastName = document.getElementById('last-name-input');
      const lastNameFeedback = document.getElementById('last-name-feedback');
      if (!lastName.value) {
        lastName.classList.add('is-invalid');
        lastNameFeedback.style.display = 'block';
        isValid = false;
      } else {
        lastName.classList.remove('is-invalid');
        lastNameFeedback.style.display = 'none';
      }

      // Validate Email
      const email = document.getElementById('email-input');
      const emailFeedback = document.getElementById('email-feedback');
      if (!email.value || !email.checkValidity()) {
        email.classList.add('is-invalid');
        emailFeedback.style.display = 'block';
        isValid = false;
      } else {
        email.classList.remove('is-invalid');
        emailFeedback.style.display = 'none';
      }

      // Validate College Name
      const college = document.getElementById('college-input');
      const collegeFeedback = document.getElementById('college-feedback');
      if (!college.value) {
        college.classList.add('is-invalid');
        collegeFeedback.style.display = 'block';
        isValid = false;
      } else {
        college.classList.remove('is-invalid');
        collegeFeedback.style.display = 'none';
      }

      // Validate Roll No
      const rollNo = document.getElementById('roll-no-input');
      const rollNoFeedback = document.getElementById('roll-no-feedback');
      if (!rollNo.value) {
        rollNo.classList.add('is-invalid');
        rollNoFeedback.style.display = 'block';
        isValid = false;
      } else {
        rollNo.classList.remove('is-invalid');
        rollNoFeedback.style.display = 'none';
      }

      // Validate Graduation Year
      const graduationYear = document.getElementById('graduation-year');
      const graduationYearFeedback = document.getElementById('graduation-year-feedback');
      if (!graduationYear.value) {
        graduationYear.classList.add('is-invalid');
        graduationYearFeedback.style.display = 'block';
        isValid = false;
      } else {
        graduationYear.classList.remove('is-invalid');
        graduationYearFeedback.style.display = 'none';
      }

      // Validate Conditions Checkbox
      const conditionsCheckbox = document.getElementById('conditions-checkbox');
      const conditionsFeedback = document.getElementById('conditions-feedback');
      if (!conditionsCheckbox.checked) {
        conditionsCheckbox.classList.add('is-invalid');
        conditionsFeedback.style.display = 'block';
        isValid = false;
      } else {
        conditionsCheckbox.classList.remove('is-invalid');
        conditionsFeedback.style.display = 'none';
      }

      if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
      }
    });