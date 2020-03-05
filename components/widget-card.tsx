function WidgetCard(prop: WidgetCardProp) {
  return (
    <div className="rounded-lg shadow bg-white">
      <img className="object-contain rounded-t-lg" src={prop.imgLink}></img>
      <div className="p-4 rounded-b-lg">
        <h6 className="font-bold">{prop.title}</h6>
        <p className="text-sm text-gray-600 leading-loose">{prop.description}</p>
      </div>
    </div>
  )
}

export type WidgetCardProp = {
  imgLink: string;
  title: string;
  description: string;
};

export default WidgetCard;
