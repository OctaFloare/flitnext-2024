const getInitials = (name) => {
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.toUpperCase();
}

export const Cast = ({ cast }) => (
    <>
        {cast.map(castMember => (
            <div key={`${castMember.role}-${castMember?.crew[0]?.name}`}>
                <div className="flex items-center gap-4">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                        <span className="font-medium text-gray-600">
                            {getInitials(castMember?.crew[0]?.name || 'N/A')}
                        </span>
                    </div>
                    <div className="font-medium">
                        <div>{castMember?.crew[0]?.name || 'Unknown Name'}</div>
                        <div className="text-sm text-gray-500">
                            {castMember?.role}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
);
