function preventTab(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
  }
}

export default preventTab;
