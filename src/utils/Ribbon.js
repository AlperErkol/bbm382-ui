const trimAndFixPostType = (postType) => {

    postType = postType.toLowerCase();
    postType = postType.charAt(0).toUpperCase() + postType.slice(1);

    if(postType === "Job" || postType === "Internship" || postType === "Scholarship"){
        postType+=" Adv.";
    }
    return postType;

};

export default trimAndFixPostType;