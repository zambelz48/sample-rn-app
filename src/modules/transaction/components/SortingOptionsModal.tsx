import React from 'react';
import { Modal, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Label, RadioCheckedIcon, RadioUncheckedIcon } from '@core/component';
import { COLORS } from '@core/config';

interface SortingOptionsModalProps {
  options: {
    label: string
    value: string
    selected: boolean
  }[]
  visible: boolean
  onClose: () => void
  onSelect: (value: string) => void
}

export const SortingOptionsModal: React.FC<SortingOptionsModalProps> = ({
  options,
  visible,
  onClose,
  onSelect,
}) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View className="flex items-center justify-center gap-4 bg-white m-auto rounded-md w-3/4 p-6">
            {options.map((option) => (
              <TouchableOpacity
                className="flex flex-row items-center justify-start gap-4 w-full"
                onPress={() => onSelect(option.value)}
                key={option.value}
              >
                {option.selected ?
                  <RadioCheckedIcon color={COLORS.orange} /> :
                  <RadioUncheckedIcon color={COLORS.orange} />
                }
                <Label>{option.label}</Label>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
