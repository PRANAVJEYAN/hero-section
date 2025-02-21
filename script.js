// GSAP Animations
gsap.from(".hero-title", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
gsap.from(".hero-subtitle", { duration: 1.2, opacity: 0, y: -30, delay: 0.3, ease: "power2.out" });
gsap.from(".hero-images img", { duration: 1.5, opacity: 0, y: 20, delay: 0.6, stagger: 0.3, ease: "power2.out" });

// Mouse Follow Effect
document.querySelectorAll(".hero-img").forEach((img) => {
    img.addEventListener("mousemove", (e) => {
        let x = (e.clientX / window.innerWidth - 0.5) * 10;
        let y = (e.clientY / window.innerHeight - 0.5) * 10;
        img.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});
