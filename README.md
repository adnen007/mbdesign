## adding prodcuts

in the jsonDB/allprodcuts.json

you will find a json array the objects in that array are the products of your website.

so to add a product you should add an object to that array but make sure that:

    - the id is a unique id you can use something like a mix between the date of the current year , current month, current,day , and finally current minute then current second.
    - in the images don't put more then 5 images
    - to locate the images in "productsImages" folder.
    - if a product have property"featured:true" that mean that product will apear in the featured product section so don't give more then 6 prodcuts a ""featured:true" "

## notes

The cool thing is that your filter (SECTION) is auto so the color that will appear in the
filter section are the color in your json file, same for categories

you can't use an ftp acount with the current hosting I'm not sure but i think the problem
is the hosting provider it sounds like he blocked the 21 prot.

## what is the use of .htaceess file

In react in production when you will host your website you will deal with a common problem
the problem is that when you refresh a page that not the base url let's say
"https://domainname/about" you will get error it is a common problem and there are a lot
of solution the simplest one for now is to add .htaccess file in the root directory with
the following setting.

RewriteEngine On

RewriteBase /

RewriteRule ^index\.html$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f

RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule . /index.html [L]

Check this link for more information.:
https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
