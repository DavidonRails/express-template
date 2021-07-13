#!/bin/sh
for png in `find . -name "*.png"`;
do
	echo "crushing $png"	
	cwebp -q 80 "$png" -o temp.webp
	mv -f temp.webp `basename "$png" .png`.webp
	echo "rename to  `basename "$png" .png`.webp"

done;
