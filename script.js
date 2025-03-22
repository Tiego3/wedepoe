// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
   
    //show and hide
    function toggleButton() {
        if (window.scrollY > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    window.addEventListener("scroll", toggleButton);

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);
}


// Course filter function
document.addEventListener("DOMContentLoaded", function() {
    const courseCategory = document.getElementById("course-category");
    const coursesList = document.getElementById("courses-list");
    
    if (courseCategory && coursesList) {
        const courses = Array.from(coursesList.getElementsByClassName("course"));

        courseCategory.addEventListener("change", function() {
            const selectedCategory = courseCategory.value.toLowerCase();

            courses.forEach(course => {
                const courseCategoryValue = course.getAttribute("data-category").toLowerCase();

                if (selectedCategory === "all" || courseCategoryValue === selectedCategory) {
                    course.style.display = "block";
                } else {
                    course.style.display = "none";
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const inputs = form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");

    // Clear placeholder text on focus
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            if (input.value.startsWith("Enter")) {
                input.value = "";
            }
        });
    });

    form.addEventListener("submit", function (event) {
        let isValid = true;
        
        // Check if every box has a value
        for (let input of inputs) {
            if (input.value.trim() === "") {
                isValid = false;
                alert("Please fill in all fields.");
                input.focus();  // Focus on the empty field
                event.preventDefault();
                return;  // Stop further checks
            }
        }

        // Validate email format
        const emailInput = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            alert("Please enter a valid email address.");
            emailInput.focus();  // Focus on the email field if invalid
            event.preventDefault();
            return;
        }
        
        // Prevent form submission if not valid
        if (!isValid) {
            event.preventDefault();
        }
    });
});
