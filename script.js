document.addEventListener("DOMContentLoaded", function() {
    let tree = document.querySelector(".tree");
    let branches = document.querySelector(".branches");
    let leaves = document.querySelector(".leaves");
    let flowers = document.querySelector(".flowers");

    setTimeout(() => {
        tree.style.height = "250px"; // Grow tree trunk
        tree.style.width = "40px";
    }, 500);

    setTimeout(() => {
        branches.style.opacity = "1"; // Show branches
    }, 2000);

    setTimeout(() => {
        leaves.style.opacity = "1"; // Show leaves
    }, 3500);

    setTimeout(() => {
        flowers.style.opacity = "1"; // Show flowers
    }, 5000);
});
