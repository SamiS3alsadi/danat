// Danat Aldonia - Multi-step booking logic

const form = document.getElementById("watch-form");

if (!form) {
  // no-op
} else {
  const steps = Array.from(document.querySelectorAll(".form-step"));
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnSubmit = document.getElementById("btn-submit");
  const messageEl = document.getElementById("form-message");
  const stepperDots = Array.from(document.querySelectorAll("[data-step-dot]"));
  const progressBar = document.getElementById("stepper-progress");

  let currentStep = 1;
  const totalSteps = steps.length || 1;

  // -----------------------------
  // Footer year
  // -----------------------------
  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // -----------------------------
  // Wizard init
  // -----------------------------
  updateStep();

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        updateStep();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (!validateStep(currentStep)) return;
      if (currentStep < totalSteps) {
        currentStep++;
        updateStep();
      }
    });
  }

  // Submit handling
  form.addEventListener("submit", async (e) => {
    if (!validateStep(currentStep)) {
      e.preventDefault();
      return;
    }

    if (typeof form.reportValidity === "function" && !form.reportValidity()) {
      e.preventDefault();
      return;
    }

    const action = form.getAttribute("action") || "";
    const canFetch = typeof window.fetch === "function" && action.startsWith("http");

    if (!canFetch) {
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.textContent = "Sending...";
      }
      return;
    }

    e.preventDefault();

    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.textContent = "Sending...";
    }
    if (messageEl) {
      messageEl.textContent = "";
      messageEl.className = "form-message";
    }

    try {
      const formData = new FormData(form);

      const res = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data && data.success) {
        if (messageEl) {
          messageEl.textContent = "✅ Booking Inquiry Sent! We'll contact you shortly.";
          messageEl.className = "form-message success";
        }

        form.reset();
        currentStep = 1;
        updateStep();
      } else {
        const msg = (data && data.message) || "Something went wrong. Please try again.";
        if (messageEl) {
          messageEl.textContent = msg;
          messageEl.className = "form-message error";
        }
      }
    } catch (err) {
      if (messageEl) {
        messageEl.textContent = "Network error. Please try again.";
        messageEl.className = "form-message error";
      }
    } finally {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.textContent = "Inquire Now";
      }
    }
  });

  // -----------------------------
  // Helper Functions
  // -----------------------------

  function updateStep() {
    steps.forEach((step) => {
      const stepNum = Number(step.dataset.step);
      step.classList.toggle("active", stepNum === currentStep);
    });

    if (btnPrev) btnPrev.disabled = currentStep === 1;
    if (btnNext) btnNext.style.display = currentStep === totalSteps ? "none" : "inline-flex";
    if (btnSubmit) btnSubmit.style.display = currentStep === totalSteps ? "inline-flex" : "none";

    stepperDots.forEach((dot) => {
      const stepNum = Number(dot.dataset.stepDot);
      dot.classList.toggle("active", stepNum === currentStep);
      dot.classList.toggle("done", stepNum < currentStep);
    });

    if (progressBar) {
      const denom = Math.max(totalSteps - 1, 1);
      const progressPercent = ((currentStep - 1) / denom) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    if (messageEl) {
      messageEl.textContent = "";
      messageEl.className = "form-message";
    }
  }

  function validateStep(stepNumber) {
    const currentStepEl = steps.find((step) => Number(step.dataset.step) === stepNumber);
    if (!currentStepEl) return true;

    const requiredFields = currentStepEl.querySelectorAll("[required]");
    for (let field of requiredFields) {
      if (field.classList && field.classList.contains("hidden")) continue;

      const isCheckbox = field.type === "checkbox";
      const isEmpty = !field.value || (isCheckbox && !field.checked);

      if (isEmpty) {
        field.focus();
        if (messageEl) {
          messageEl.textContent = "Please complete all required fields.";
          messageEl.className = "form-message error";
        }
        return false;
      }
    }

    return true;
  }
}