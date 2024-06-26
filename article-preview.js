const styling = `
    <style>
        .visually-hidden {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
        
        .article {
            width: 300px;
            height: auto;
            list-style-type: none;
            background-color: #e1dfdf;
            padding: 10px;
            border-radius: 8px;
            box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
        }
        
        .article-details {
            margin-bottom: 16px
        }
        

        
        .article-image {
            width: 100%;
            height: auto;
            border-radius: 5px;
        }
        
        .article-figure {
            margin: 0;
        }
        
        
        .article-title {
            list-style-type: none;
            margin: 0 0 8px 0;
        }
        
        .read-more {
            color: white;
            text-decoration: none;
            font-weight: 700;
            background-color: #0a6161;
            padding: 2px 4px;
            border-radius: 4px;
        }
        
    </style>
    `
class ArticlePreview extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode:'open'});
    }

    get name() {
        return this.getAttribute('name');
    }

    get startDate() {
        return this.getAttribute('startDate');
    }

    get endDate() {
        return this.getAttribute('endDate');
    }

    get location() {
        return this.getAttribute('location');
    }
    
    get previewImage() {
        return this.getAttribute('previewImage')
    }

    get link() {
        return this.getAttribute('link');
    }

    async connectedCallback() {
        
        this.shadowRoot.innerHTML += this.createElement();
    }
    
    createElement(){
        return (`
           ${styling}
           <li class="article">
                <article class="teaser-content">
                    <div class="article-details">
                        <h3 class="article-title">${this.name}</h3>

                        <div
                            <span>
                                <time datetime="${this.startDate}">From ${this.startDate}</time>
                                &nbsp;<time datetime="${this.endDate}">until the ${this.endDate}</time>
                            </span>
                        </div>

                        <p>Location: ${this.location}</p>

                        <a class="read-more" href='${this.link}' title="${this.name}">
                            Read more <span class="visually-hidden">
                                about ${this.name}
                            </span>
                        </a>

                    
                    </div>
                    <figure class="article-figure">
                        <img class="article-image" src="${this.previewImage}" alt="alt text" />
                    </figure>
                </article>
            </li>
        `);
    }
    

    
}

window.customElements.define('article-preview', ArticlePreview);