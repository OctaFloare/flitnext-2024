export const Crew = ({ crew }) => (
    crew && crew.map(crewMember => (
      <div key={`${crewMember.name}-${crewMember.id}`} className="text-gray-200">
        <div>Name: {crewMember.name}</div>
      </div>
    ))
  );
  