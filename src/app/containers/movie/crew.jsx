export const Crew = ({ crew }) => crew &&
 crew.map(crewMember => <div key={`${crewMember.name}-${crewMember.id}`}>
    <div>Name: {crewMember.name}</div>
</div>)