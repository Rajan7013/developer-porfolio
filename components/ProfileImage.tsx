/** Pre-encoded hero sizes avoid image-transformation latency on a cold deployment. */
export default function ProfileImage({ alt, sizes }: { alt: string; sizes: string }) {
    return (
        <picture>
            <source type="image/avif" srcSet="/image/home-profile-400.avif 400w, /image/home-profile-640.avif 640w, /image/home-profile-960.avif 960w" sizes={sizes} />
            <img src="/image/home-profile.webp" alt={alt} width={960} height={640} fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        </picture>
    );
}
