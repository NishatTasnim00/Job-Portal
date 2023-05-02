import { useEffect, useState } from 'react';
import React, { PureComponent } from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const[marks, setMarks] = useState([])
    useEffect(()=>{
        fetch('marks.json')
        .then(res => res.json())
        .then(marks => setMarks(marks))
    }, [])
    console.log(marks);
    return (
			<div>
				<ResponsiveContainer width="80%" height={400}>
					<AreaChart
						data={marks}
						margin={{ top: 100, right: 0, bottom: 20, left: 200 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="marks"
							stroke="#8884d8"
							fill="#8884d8"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		);
};

export default Statistics;