import React, { useState } from 'react';
import { StarIcon } from '../atoms/icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentStep: number;
    onNext: () => void;
    onBack: () => void;
    onConfirm: () => void;
}

interface BadgeOption {
    id: string;
    label: string;
}

const BADGE_OPTIONS: BadgeOption[] = [
    { id: 'stellar', label: 'Stellar' },
    { id: 'soroban', label: 'Soroban' },
    { id: 'blockful', label: 'Blockful' },
    { id: 'custom', label: 'Custom' }
];

export const StepModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    currentStep,
    onNext,
    onBack,
    onConfirm,
}) => {
    const [selectedAvatar, setSelectedAvatar] = useState<string>('');
    const [selectedBadge, setSelectedBadge] = useState<string>('');

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full bg-gray-700 rounded-lg p-2 bg-whiteOpacity008"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Description</label>
                            <textarea
                                className="w-full bg-gray-700 rounded-lg p-2 bg-whiteOpacity008"
                                rows={4}
                            />
                            <div className="text-right text-sm text-gray-400">0/120</div>
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Avatar</label>
                            <div className="grid grid-cols-5 gap-4">
                                {[
                                    { icon: <StarIcon />, id: 'star' },
                                    { icon: <StarIcon />, id: 'trophy' },
                                    { icon: <StarIcon />, id: 'key' },
                                    { icon: <StarIcon />, id: 'heart' },
                                    { icon: <StarIcon />, id: 'diamond' },
                                    { icon: <StarIcon />, id: 'cake' },
                                    { icon: <StarIcon />, id: 'building' },
                                    { icon: <StarIcon />, id: 'medal' },
                                    { icon: <StarIcon />, id: 'user' },
                                    { icon: <StarIcon />, id: 'github' }
                                ].map(({ icon, id }) => (
                                    <button
                                        key={id}
                                        onClick={() => setSelectedAvatar(id)}
                                        className={`p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors ${selectedAvatar === id ? 'ring-2 ring-green-500' : ''
                                            }`}
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Badges</label>
                            <div className="flex gap-2">
                                {BADGE_OPTIONS.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        onClick={() => setSelectedBadge(id)}
                                        className={`p-2 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors ${selectedBadge === id ? 'bg-gray-700' : ''
                                            }`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between mb-4">
                            <div>Badge</div>
                            <div>Score</div>
                        </div>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={num} className="flex justify-between items-center">
                                <input
                                    type="text"
                                    placeholder={`Badge Name #${num}`}
                                    className="bg-gray-700 rounded-lg p-2 w-2/3"
                                />
                                <input
                                    type="number"
                                    className="bg-gray-700 rounded-lg p-2 w-1/4"
                                />
                                <button className="text-gray-400">
                                    {/* <BadgeIcon width={10} height={10} /> */}
                                </button>
                            </div>
                        ))}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4 h-96">
                        <div className="w-20 h-20 bg-gray-700 rounded-full">
                            {/* selected icon */}
                        </div>
                        <h2 className="text-xl font-bold">Stellar Quests</h2>
                        <p className="text-gray-400">
                            Integer malesuada leo nisi, quis ullamcorper mauris elementum ut. Suspendisse eget libero iaculis, maximus velit vitae.
                        </p>
                    </div>
                );
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-grey02 rounded-lg p-6 w-full max-w-md z-50 relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl">Create community</h2>
                    <button onClick={onClose}>
                        {/* <BadgeIcon width={10} height={10} /> */}
                    </button>
                </div>

                {renderStep()}

                <div className="flex justify-end gap-4 mt-6">
                    {currentStep > 1 && (
                        <button
                            onClick={onBack}
                            className="px-4 py-2 bg-gray-700 rounded-lg"
                        >
                            Back
                        </button>
                    )}
                    {currentStep < 3 ? (
                        <button
                            onClick={onNext}
                            className="px-4 py-2 bg-green-500 rounded-lg"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-green-500 rounded-lg"
                        >
                            Confirm
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
