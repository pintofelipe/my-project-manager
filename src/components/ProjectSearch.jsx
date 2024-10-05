function ProjectSearch({searchTerm, onSearchChange}) {


  return (
    <div className="flex h-14 mt-10 mx-auto text-6xl container  items-center rounded-3xl bg-beige-3 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 25"
        strokeWidth="1.0"
        stroke="currentColor"
        className="size-6 h-14 container w-14 ml-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        value={searchTerm}
        className="bg-beige-3 border-none h-14 text-3xl w-full mr-10 font-mono"
        onChange={(e)=> onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default ProjectSearch;
