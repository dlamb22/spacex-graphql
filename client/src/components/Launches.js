import React from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const LaunchesResults = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <h4>Loading...</h4>;
    if (error) console.log(error);
    return data.launches.map((launch, i) => (
      <LaunchItem key={i} launch={launch} />
    ));
  };

  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
      <MissionKey />
      {LaunchesResults()}
    </div>
  );
};

export default Launches;
