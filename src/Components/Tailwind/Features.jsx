
import React from 'react';

export default function Features(props) {

        return (
        <div className="bg-white py-24 sm:py-24 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-red-600">{props.data.smalltitle}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.data.title}</p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        {props.data.description}
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        {props.data.features.map((feature) => (
                            <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white sm:shrink-0">
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
