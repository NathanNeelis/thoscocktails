export function checkAllCheckboxes(formId: string): void {
  // Get the form element by its ID
  const form = document.getElementById(formId) as HTMLFormElement | null;

  if (form) {
    // Get all checkbox inputs within the form
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');

    // Loop through each checkbox and check it
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = true;
    });
  } else {
    console.error(`Form with ID "${formId}" not found.`);
  }
}

export function areAllCheckboxesChecked(formId: string): boolean {
  // Get the form element by its ID
  const form = document.getElementById(formId) as HTMLFormElement | null;

  if (form) {
    // Get all checkbox inputs within the form
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');

    // Check if every checkbox is checked
    return Array.from(checkboxes).every(
      (checkbox) => (checkbox as HTMLInputElement).checked
    );
  } else {
    console.error(`Form with ID "${formId}" not found.`);
    return false;
  }
}

export function getCheckedCheckboxValues(formId: string): string[] {
  // Get the form element by its ID
  const form = document.getElementById(formId) as HTMLFormElement | null;

  if (form) {
    // Get all checkbox inputs within the form
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');

    // Filter checked checkboxes and map their values to an array
    const checkedValues = Array.from(checkboxes)
      .filter((checkbox) => (checkbox as HTMLInputElement).checked)
      .map((checkbox) => (checkbox as HTMLInputElement).value);

    return checkedValues;
  } else {
    console.error(`Form with ID "${formId}" not found.`);
    return [];
  }
}
