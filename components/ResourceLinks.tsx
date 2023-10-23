import React from 'react';
import { GhButton, DownloadButton } from './Buttons';

interface Props {
  children?: React.ReactNode;
  repo: string;
  docs?: string;
  download?: string;
}

const ResourceLinks = ({ repo, download }: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
      <GhButton link={repo} />
      {download && <DownloadButton link={download }/>}
    </div>
  );
};

export default ResourceLinks;
