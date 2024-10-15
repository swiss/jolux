document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('div.highlight-sparql').forEach(function(div) {
        const codeBlock = div.querySelector('pre');
        if (codeBlock) {
            const query = codeBlock.innerText.trim();
            const endpoint = 'https://fedlex.data.admin.ch/sparql';
            
            const urlParams = new URLSearchParams({
                'query': query,
                'contentTypeConstruct': 'text/turtle',
                'contentTypeSelect': 'application/sparql-results+json',
                'endpoint': '/sparqlendpoint',
                'requestMethod': 'POST',
                'tabTitle': 'Query',
                'headers': '{}',
                'outputFormat': 'table'
            }).toString();
            
            const url = `${endpoint}#${urlParams}`;
            
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.innerText = '▶️ Execute Query';
            link.classList.add('execute-query-link');
            div.appendChild(link);
        }
    });
});
