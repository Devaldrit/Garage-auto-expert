export interface WorkshopServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const WorkshopServiceCard = ({
  title,
  description,
  image,
}: WorkshopServiceCardProps) => {
  return (
    <article className="group flex h-full flex-col items-center rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl sm:p-7">
      <img
        src={image}
        alt={title}
        className="mx-auto mb-5 h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
      />
      <h3 className="mb-3 text-lg font-bold text-black">{title}</h3>
      <p className="text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
};

export default WorkshopServiceCard;
