---
title: "image metadata"
date: 2023-10-06T14:14:00+07:00
authors: ['Sparisoma Viridi']
tags: ['ku4078']
draft: false
math: true
url: "0089"
---
{{< toc >}}


## introduction
+ One type of image metadata is EXIF metadata, where the term stands for Exchangeable Image File Format, whose technology behind it was developed in 1995 by the Japanese Electronic Industries Development Association as a standard format for JPEG and TIFF with current version is 2.3 that has been available since 2010 ([IONOS, 2023](https://www.ionos.com/digitalguide/websites/web-design/what-is-exif-data/)).
+ Almost all nowadays camera manufacturers use EXIF to store information about the captured image, where this information is called metadata which can include camera settings, image metrics, data & time information, location information, thumbnail, description, and copyright information ([Kukil, 2022](https://learnopencv.com/what-is-exif-data-in-images/)).
+ Not only devices for taking photos that is doing something related to metadata, image editing programs often add metadata to images including modification timestamps, system info, and tracked changes ([Bischoff, 2021](https://www.comparitech.com/blog/vpn-privacy/exif-metadata-privacy/)).


## image metadata
+ The image metadata can be in the format of EXIT, IPTC, and XMP ([NeededApps, 2023]()).
https://neededapps.com/tutorials/what-are-image-metadata-exif-iptc-xmp/
+ ExifTool recognizes a total of 26993 tags, with about 16973 unique tag names, where EXIF, IPTC, and XMP are three of them ([Harvey, 2023](https://exiftool.org/TagNames/index.html)).
+ There are various standardized formats used for metadata, where the common ones are Exchangeable Image File or EXIF, Information Interchange Mode or IIM, International Color Consortium or ICC, and Extensible Metadata Platform or XMP ([Sheldon, 2023](https://www.techtarget.com/whatis/definition/image-metadata)).


## removing metadata
+ The availability of this rich metadata has raised privacy concerns, resulting in social networking sites such as Instagram and Facebook stripping out EXIF tags from images uploaded by users to protect their privacy ([Porter,2021](https://www.timg.com/enter-exif-an-introduction-to-image-file-meta-data/)).
+ Image metadata can be removed manually with Windows, using ImageOptim on Mac, using GIMP that supported by several OS, dan using mobile apps ([Arsenault, 2018](https://www.keycdn.com/blog/image-metadata)).
+ The iOS does not come with the built-in ability to edit or remove photo metadata, but it is possible to remove EXIF information using the Shortcuts app, which often comes automatically installed on iOS devices, whose setup is unfortunately a little convoluted and a simpler way to edit or remove photo metadata on iOS is to use a third-party app ([O'Driscoll, 2023](https://www.comparitech.com/blog/information-security/remove-metadata-from-photos/)).


## code
+ There are some JavaScript libraries that can access the Exif data in digital photos, e.g Piexifjs, not only read but also edit and erase it ([deVilla, 2021](https://auth0.com/blog/read-edit-exif-metadata-in-photos-with-javascript/)).
+ Read and remove metdata data form photos can be performed also with Python, e.g. exif package ([deVilla, 2021](https://auth0.com/blog/read-edit-exif-metadata-in-photos-with-python/)).
+ With Java not only Exif metadata can be read, but also IPTC/IIM and XMP metadata ([Hillert, 2022](https://medium.com/@hillert/read-write-image-metadata-with-java-part-1-d5e2057c80d9)).


## categories
Image metadata is often divided into three main categories ([Sheldon, 2023](https://www.techtarget.com/whatis/definition/image-metadata)).
+ Technical metadata includes camera aperture, resolution, focal length, shutter speed, ISO speed, camera brand and model, date and time and the GPS location when the image was created.
+ Descriptive metadata is mostly added manually using special software such as GIMP or Affinity Photo.
+ Administrative metadata, like descriptive metadata, is added manually using special software, that might include usage and licensing rights, restrictions on reuse, contact information for the image owner or similar types of information.


## notes
+ Kode KU4078 is for Studium Generale course.
+ The Metadata lecture is for 11 Oct 2023 on Faculty of Animal Science, UNJA.
+ Other note(s): [0076](../0076/).