const Contact = () => {
  return (
    <section className="contact p-8">
      <div className="section-header mb-4">
        <h2 className="text-2xl tracking-wide uppercase">Contact</h2>
      </div>
      <div className="section-body max-w-lg mx-auto bg-slate-700 p-4 rounded-lg">
        <form
          action="https://formspree.io/f/meqbwobp"
          method="POST"
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="flex flex-col w-full">
              <label className="text-slate-200 text-base" htmlFor="name">
                Your Name
              </label>
              <input
                className="px-2 py-1 text-base bg-slate-500 border-b text-white rounded"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-slate-200 text-base" htmlFor="email">
                Email Address
              </label>
              <input
                className="px-2 py-1 text-base bg-slate-500 border-b text-white rounded"
                type="email"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200 text-base" htmlFor="message">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="2"
              className="px-2 py-1 text-base bg-slate-500 border-b text-white w-full rounded"
            ></textarea>
          </div>
          <div className="button-container mx-auto mt-4">
            <button className="px-4 py-2 bg-emerald-300 border w-max rounded text-slate-950 font-medium text-lg ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
