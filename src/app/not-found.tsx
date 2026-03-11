import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-ivory">
      <div className="container-narrow text-center">
        <p className="font-serif font-light text-[6rem] text-stone-200 leading-none mb-4">404</p>
        <h1 className="font-serif font-light text-display-md text-charcoal mb-4">
          This page does not exist.
        </h1>
        <p className="font-sans text-base text-stone-500 mb-10 max-w-sm mx-auto leading-relaxed">
          The page you are looking for may have been moved or may not yet exist. ANCYR launches in 2026.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary">Return Home</Button>
          <Button href="/collection" variant="outline">View Altitude I</Button>
        </div>
      </div>
    </section>
  );
}
