# category-list
A dynamic category list menu for NodeBB

Steps

Before you do anything else, amend the existing navigation menu item in `/admin/settings/navigation`. Locate the existing `categories` and enable the `dropdown` function. 

In the code window identified as 

```
Place your dropdown menu items below, ie:
<li><a class="dropdown-item" href="https://myforum.com">Link 1</a></li>
```

Locate the file `header.html`. Copy this code, and paste into the above location, then save

Now save it.

Go to `/admin/appearance/customise#custom-js`
Locate the file `categories.js` in this repository
Paste the contents of that file into the `Custom JS` window and ensure `Enable Custom Javascript` is enabled
Save

Go to `/admin/appearance/customise#custom-css`
Locate the file `categories.css` in this repository
Paste the contents of that file into the `Custom CSS` window and ensure `Enable Custom CSS/SASS` is enabled
Save

Test it!

You should end up with something like the category tree on the left

![image](https://github.com/phenomlab/category-list/assets/2557946/14394e35-e33e-4ab0-85d0-79b346d8353e)





