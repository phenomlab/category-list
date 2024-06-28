$(document).ready(function() {
    $.getJSON('/api/categories', function(data, status) {
        $.each(data.categories, function(key, value) {
            var iconClass = 'fa-regular'; // Default to 'fa-regular' if the icon type is not recognized
            
            // Check if the icon is FontAwesome Unicode
            if (this.icon.startsWith('&#x') || this.icon.startsWith('&#xf')) {
                iconClass = 'fa-regular';
            } else if (this.icon.startsWith('fab')) {
                iconClass = 'fab';
            }
            
            var categorylist = $("<li class='nav-item' title=''> \
                <a class='nav-link nav-btn navigation-link px-3 py-2' href='/category/" + this.slug + "'> \
                    <span class='d-inline-flex justify-content-between align-items-center w-100'> \
                        <span class='text-nowrap'> \
                            <i class='" + iconClass + " " + this.icon + " menu-icon' data-content='' aria-hidden='true'></i> \
                            <span class='nav-text px-2 fw-semibold'>" + this.name + "</span> \
                        </span> \
                        <span component='navigation/count' class='badge rounded-1 bg-primary hidden'></span> \
                    </span> \
                </a> \
                <ul class='tree-branch' style='list-style: none;'>" + 
                this.children.map(c => {
                    var childIconClass = 'fa-regular'; // Default to 'fa-regular' for child icons
                    
                    // Check if the child icon is FontAwesome Unicode
                    if (c.icon.startsWith('&#x') || c.icon.startsWith('&#xf')) {
                        childIconClass = 'fa-regular';
                    } else if (c.icon.startsWith('fab')) {
                        childIconClass = 'fab';
                    }
                    
                    return `<li class='nav-item tree-node' title=''><a class='nav-link nav-btn navigation-link px-3 py-2' href='/category/${c.slug}'><span class='d-inline-flex justify-content-between align-items-center w-100'><span class='text-nowrap'><i class='${childIconClass} ${c.icon} menu-icon' data-content='' aria-hidden='true'></i><span class='nav-text px-2 fw-semibold'>${c.name}</span></span><span component='navigation/count' class='badge rounded-1 bg-primary hidden'></span></span></a></li>`;
                }).join(" ") + 
                "</ul> \
            </li>");
            
            if ($(window).width() < 767) {
                $(".bottombar #thecategories").append(categorylist);
            } else {
                $(".sidebar-left #thecategories").append(categorylist);
            }
        });
    });
});
