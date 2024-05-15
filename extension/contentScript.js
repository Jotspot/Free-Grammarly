function findAndStyleShadowDomElements() {
    // Use querySelectorAll to find all elements that possibly have a shadow root
    document.querySelectorAll('[data-grammarly-shadow-root]').forEach(hostElement => {
        // Access the shadow root if it exists
        let shadowRoot = hostElement.shadowRoot;
        if (shadowRoot) {
            // Now, query inside the shadow root for elements with a specific class
            const targetElements = shadowRoot.querySelectorAll('.stickerBackgroundWithCutOut, .stickerBackgroundTriangle, .stickerLabel'); // Replace '.specific-class' with your target class
            targetElements.forEach(element => {
                element.style.opacity = '0'; // Example style change
            });
        }
    });

    // Optionally, check again after a short delay in case of dynamic content
    setTimeout(findAndStyleShadowDomElements, 1000); // Check every 1000 milliseconds
}

// Initial call to start the function
findAndStyleShadowDomElements();
