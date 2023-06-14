import { Icon, ListItem } from '@react-native-material/core';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

/* @ts-ignore */
export const SpoilerCultures = ({ title, children, leadingIcon = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      {leadingIcon === ''
        ? <ListItem
          title={title}
          trailing={(props) => <Icon name={isExpanded ? 'expand-more' : 'chevron-right'} {...props} />}
          onPress={toggleExpansion}
        />
        : <ListItem
          title={title}
          leading={<Icon name={leadingIcon} size={26} />}
          trailing={(props) => <Icon name={isExpanded ? 'expand-more' : 'chevron-right'} {...props} />}
          onPress={toggleExpansion}
        />}
        {isExpanded && (
        <View style={{ backgroundColor: "#fff" }}>
          {children}
        </View>
      )}
    </View>
  );
};
