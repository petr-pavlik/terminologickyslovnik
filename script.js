document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded. Initializing collapsible sections...');

  // Select all h5 elements with class 'anchored'
  const headings = document.querySelectorAll('h5.anchored');
  if (headings.length === 0) {
    console.warn('No h5 elements found.');
    return;
  }

  headings.forEach((heading) => {
    // Locate the collapsible div (skipping the anchor link)
    const collapsible = heading.nextElementSibling;
    if (collapsible && collapsible.classList.contains('collapsible')) {
      console.log(`Collapsible content found for heading: "${heading.textContent.trim()}"`);

      // Add click event to the heading
      heading.addEventListener('click', () => {
        if (collapsible.style.maxHeight) {
          collapsible.style.maxHeight = null; // Collapse
          collapsible.style.overflow = 'hidden'; // Prevent overflow
          console.log(`Collapsing content for heading: "${heading.textContent.trim()}"`);
        } else {
          collapsible.style.maxHeight = collapsible.scrollHeight + "px"; // Expand
          collapsible.style.overflow = 'visible'; // Allow content to show
          console.log(`Expanding content for heading: "${heading.textContent.trim()}"`);
        }
        heading.classList.toggle('collapsed');
      });

      // Initialize the collapsible section as collapsed
      collapsible.style.maxHeight = null;
      collapsible.style.overflow = 'hidden';
      heading.classList.add('collapsed');
    } else {
      console.warn(`No collapsible div found after heading: "${heading.textContent.trim()}"`);
    }
  });
});
