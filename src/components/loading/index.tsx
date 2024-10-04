import React from "react";

const Loading = () => {
    return (
        <div className="w-12 h-9 flex justify-center items-center">
            <div className="flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-dashed border-purple_60 animate-spin duration-1000">
                    <div className="h-6 w-6 rounded-full bg-purple_90"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
