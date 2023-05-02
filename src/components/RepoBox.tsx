interface Repo {
  name: string;
  description: string;
}

export function RepoBox ({ name, description }:Repo ) {

  return (
    <div className="flex flex-col items-start justify-between h-36 w-52 p-4 rounded-lg bg-[#202024] hover:border-2 hover:border-[#9B4DEE]">
      <div className="group w-44 "> 
        <strong className="text-gray-200" >{name}</strong>
        <p className="text-sm truncate text-gray-500 pt-2">{description}</p>
        <span className="absolute hidden w-44 h-auto rounded p-2 font-normal text-gray-300 bg-[#202024] border-2 border-[#9b4dee] group-hover:block">{description}</span>
      </div>

      <button className="">Like</button>
    </div>
  )
}