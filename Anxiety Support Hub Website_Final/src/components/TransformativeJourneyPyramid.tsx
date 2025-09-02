interface TransformativeJourneyPyramidProps {
  className?: string;
  imageSrc?: string;
  alt?: string;
}

export function TransformativeJourneyPyramid({ 
  className = "", 
  imageSrc = "/pyramid-journey.jpg",
  alt = "Transformative Journey Pyramid showing the three-tier service structure"
}: TransformativeJourneyPyramidProps) {
  return (
    <div className={`relative bg-gradient-to-br from-[#0C363B] to-[#314E52] rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-full h-full max-w-[280px] aspect-square">
          <img
            src="/pyramid-journey.jpg"
            alt={alt}
            className="w-full h-full object-cover rounded-lg"
            width={280}
            height={280}
            loading="lazy"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = "/transformative-pyramid.jpg";
            }}
          />
        </div>
      </div>
    </div>
  );
}