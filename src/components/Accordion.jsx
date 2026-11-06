function Accordion(props) {
  console.log(props.review)
  return (
    <section className="my-12 w-full">
      <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-slate-100 px-5 py-4 font-semibold text-slate-800 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 [&::-webkit-details-marker]:hidden">
          <span>{props.title}</span>
          <span aria-hidden="true" className="text-2xl leading-none text-slate-500">
            <span className="group-open:hidden">+</span>
            <span className="hidden group-open:inline">-</span>
          </span>
        </summary>
        <div className="space-y-4 border-t border-slate-200 px-5 py-5 text-slate-700">
          {props.question?.length >= 0 &&
            props.question.map((item, index) => (
              <div key={item.question ?? index} className="py-2">
                <h3 className="font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            ))}
          {props.review && (
            <>
              <div className="py-2">
                <p className="font-semibold text-slate-900">{props.review.content}</p>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
                <div>
                  <p className="mb-2 font-semibold text-slate-900">Pros</p>
                  <ul className="list-inside list-disc space-y-2 text-slate-600">
                    {props.review.pros?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold text-slate-900">Cons</p>
                  <ul className="list-inside list-disc space-y-2 text-slate-600">
                    {props.review.cons?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </details>
    </section>
  );
}

export default Accordion;
