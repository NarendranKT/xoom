import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return <div>Meeting : #{id}</div>;
};

export default Meeting;
