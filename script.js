document.addEventListener('DOMContentLoaded', function () {
    function handleNavClick(event) {
        var clickedElement = event.target;

        if (clickedElement.tagName === 'LI') {
            var activeElement = document.getElementById('active');
            if (activeElement) {
                activeElement.removeAttribute('id');
            }

            clickedElement.id = 'active';

            updateArticle(clickedElement.textContent);
        }
    }

    document.querySelector('#container nav ul').addEventListener('click', handleNavClick);

    function updateArticle(activeCategory) {
        var activeResources = resources.find(resource => resource.category === activeCategory);

        if (activeResources) {
            document.querySelector('article h2').textContent = activeResources.category;
            document.querySelector('#tekst').textContent = activeResources.text;

            var linksList = document.querySelector('article ul');
            linksList.innerHTML = '';

            activeResources.sources.forEach(source => {
                var listItem = document.createElement('li');
                var link = document.createElement('a');
                link.href = source.url;
                link.textContent = source.title;
                listItem.appendChild(link);
                linksList.appendChild(listItem);
            });
        }
    }

    updateArticle(document.getElementById('active').textContent);
});
