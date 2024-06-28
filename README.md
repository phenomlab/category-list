# category-list
A dynamic category list menu for NodeBB

Steps

Before you do anything else, amend the existing navigation menu item in `/admin/settings/navigation`. Locate the existing `categories` and enable the `dropdown` function. 

In the code window identified as 

```
Place your dropdown menu items below, ie:
<li><a class="dropdown-item" href="https://myforum.com">Link 1</a></li>
```

Paste the below code

```
<li class='nav-item' title=''>                 
    <a class='nav-link nav-btn navigation-link px-3 py-2' href='/categories'>                     
        <span class='d-inline-flex justify-content-between align-items-center w-100'>                         
            <span class='text-nowrap'>                             
                <i class='fa-regular fa-list fa-solid menu-icon' data-content='' aria-hidden='true'></i>                             
                <span class='nav-text px-2 fw-semibold'>All Categories</span>                         
            </span>                         
            <span component='navigation/count' class='badge rounded-1 bg-primary hidden'></span>                     
        </span>                 
    </a>                 
    <ul class='tree-branch' style='list-style: none;'></ul>            
 </li>
 <li id='thecategories'><h6 class='dropdown-header text-xs'>Individual Categories</h6></li>
```

Now save it.

Go to `/admin/appearance/customise#custom-js`
Locate the file `categories.js` in this repository
Paste the contents of that file into the `Custom JS` window and ensure `Enable Custom Javascript` is enabled
Save

Now go to `/admin/appearance/customise#custom-css` and add 






