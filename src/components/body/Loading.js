import React, {Fragment} from 'react';

const Loading = () => {
    return (
        <Fragment>

            <div className="col-12" style={{padding:"60px"}}>
                <span className="fa fa-spinner fa-5x text-primary fa-fw fa-pulse"></span>
            </div>

        </Fragment>
    );
};

export default Loading;