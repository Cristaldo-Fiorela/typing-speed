const scoreBar = () => {
    return (
        <div>
            <div>
                <p>
                    WPM: <span>0</span>
                </p>
                <p>
                    Accuracy: <span>100%</span>
                </p>
                <p>
                    Time: <span>0:60</span>
                </p>
            </div>
            <div>
                <div>
                    <p>Difficulty:</p>
                    {/* botones  */}
                </div>
                <div>
                    <p>Mode:</p>
                    {/* botones  */}
                </div>
            </div>
        </div>
    );
};

export default scoreBar;
