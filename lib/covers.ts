import glob from 'glob'

// From: https://github.com/joe-bell/plaiceholder/blob/67ed723f8ea0b8ad43d627477040b1db135d54cb/examples/11ty/src/_data/assets/unsplash.js
export function getAllCoverImagePaths() {
  return glob.sync("./public/cover/*.{jpg,png}").map((file) => {
    const sep = "/";
    const fileArr = file.split(sep);

    const filePath = fileArr
      .slice(fileArr.indexOf("public") + 1, fileArr.length)
      .join(sep);

    return [sep, filePath].join("");
  });
}