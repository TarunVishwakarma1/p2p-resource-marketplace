'use client';

import { Resource } from '@/components/types/index';

interface ResourceListProps {
  resources: Resource[];
  isConnected: boolean;
}

export default function ResourceList({ resources, isConnected }: Readonly<ResourceListProps>) {
  return (
    <div className="space-y-4">
      {resources.length === 0 ? (
        <p className="text-gray-500">No resources available</p>
      ) : (
        resources.map((resource) => (
          <div key={resource.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">{resource.type} Resource</h3>
              <span className="text-green-600 font-medium">{resource.price} ETH/hour</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>
                <span className="text-gray-500 text-sm">Capacity:</span>
                <p>{resource.amount}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Location:</span>
                <p>{resource.location}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Availability:</span>
                <p>{resource.availability}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Provider:</span>
                <p className="truncate">{resource.owner}</p>
              </div>
            </div>
            <div className="mt-4">
              {isConnected ? (
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Rent Resource
                </button>
              ) : (
                <button disabled className="w-full bg-gray-300 text-gray-500 py-2 rounded-md cursor-not-allowed">
                  Connect Wallet to Rent
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}