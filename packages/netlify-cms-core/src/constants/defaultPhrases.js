export function getPhrases() {
  return {
    app: {
      header: {
        content: 'Reports',
        workflow: 'Publishing',
        media: 'Media',
        quickAdd: 'Quick add',
      },
      app: {
        errorHeader: 'Error loading the CMS configuration',
        configErrors: 'Config Errors',
        checkConfigYml: 'Check your config.yml file.',
        loadingConfig: 'Loading configuration...',
        waitingBackend: 'Waiting for backend...',
      },
      notFoundPage: {
        header: 'Not Found',
      },
    },
    collection: {
      sidebar: {
        collections: 'Reports',
        searchAll: 'Search all',
      },
      collectionTop: {
        viewAs: 'View as',
        newButton: 'New %{collectionLabel}',
      },
      entries: {
        loadingEntries: 'Loading Entries',
        cachingEntries: 'Caching Entries',
        longerLoading: 'This might take several minutes',
      },
    },
    editor: {
      editorControlPane: {
        widget: {
          required: '%{fieldLabel} is required.',
          regexPattern: "%{fieldLabel} didn't match the pattern: %{pattern}.",
          processing: '%{fieldLabel} is processing.',
        },
      },
      editor: {
        onLeavePage: 'Are you sure you want to leave this page?',
        onUpdatingWithUnsavedChanges:
          'You have unsaved changes, please save before updating status.',
        onPublishingNotReady: 'Please update status to "Ready" before publishing.',
        onPublishingWithUnsavedChanges: 'You have unsaved changes, please save before publishing.',
        onPublishing: 'Are you sure you want to publish this report?',
        onDeleteWithUnsavedChanges:
          'Are you sure you want to delete this published report, as well as your unsaved changes from the current session?',
        onDeletePublishedEntry: 'Are you sure you want to delete this published report?',
        onDeleteUnpublishedChangesWithUnsavedChanges:
          'This will delete all unpublished changes to this report, as well as your unsaved changes from the current session. Do you still want to delete?',
        onDeleteUnpublishedChanges:
          'All unpublished changes to this report will be deleted. Do you still want to delete?',
        loadingEntry: 'Loading entry...',
      },
      editorToolbar: {
        publishing: 'Publishing...',
        publish: 'Publish',
        published: 'Published',
        publishAndCreateNew: 'Publish and create new',
        deleteUnpublishedChanges: 'Delete unpublished changes',
        deleteUnpublishedEntry: 'Delete unpublished entry',
        deletePublishedEntry: 'Delete published entry',
        deleteEntry: 'Delete report',
        saving: 'Saving...',
        save: 'Save',
        deleting: 'Deleting...',
        updating: 'Updating...',
        setStatus: 'Set status',
        backCollection: ' Working in %{collectionLabel}',
        unsavedChanges: 'Unsaved Changes',
        changesSaved: 'Changes saved',
        draft: 'Draft',
        inReview: 'In review',
        ready: 'Ready',
        publishNow: 'Publish now',
      },
      editorWidgets: {
        unknownControl: {
          noControl: "No control for widget '%{widget}'.",
        },
        unknownPreview: {
          noPreview: "No preview for widget '%{widget}'.",
        },
      },
    },
    mediaLibrary: {
      mediaLibrary: {
        onDelete: 'Are you sure you want to delete selected media?',
      },
      mediaLibraryModal: {
        loading: 'Loading...',
        noResults: 'No results.',
        noAssetsFound: 'No assets found.',
        noImagesFound: 'No images found.',
        private: 'Private ',
        images: 'Images',
        mediaAssets: 'Media assets',
        search: 'Search...',
        uploading: 'Uploading...',
        uploadNew: 'Upload new',
        deleting: 'Deleting...',
        deleteSelected: 'Delete selected',
        chooseSelected: 'Choose selected',
      },
    },
    ui: {
      errorBoundary: {
        title: 'Sorry!',
        details: "There's been an error - please ",
        reportIt: 'report it!',
      },
      settingsDropdown: {
        logOut: 'Log Out',
      },
      toast: {
        onFailToLoadEntries: 'Failed to load report: %{details}',
        onFailToPersist: 'Failed to persist report: %{details}',
        onFailToDelete: 'Failed to delete report: %{details}',
        onFailToUpdateStatus: 'Failed to update status: %{details}',
        missingRequiredField:
          "Oops, you've missed a required field. Please complete before saving.",
        entrySaved: 'Report saved',
        entryPublished: 'Report published',
        onFailToPublishEntry: 'Failed to publish: %{details}',
        entryUpdated: 'Report status updated',
        onDeleteUnpublishedChanges: 'Unpublished changes deleted',
      },
    },
    workflow: {
      workflow: {
        loading: 'Loading Reports for Approval',
        workflowHeading: 'Publishing Workflow',
        newPost: 'New Report',
        description:
          '%{smart_count} entry waiting for review, %{readyCount} ready to go live. |||| %{smart_count} entries waiting for review, %{readyCount} ready to go live. ',
      },
      workflowCard: {
        deleteChanges: 'Delete changes',
        deleteNewEntry: 'Delete new report',
        publishChanges: 'Publish changes',
        publishNewEntry: 'Publish new report',
      },
      workflowList: {
        onDeleteEntry: 'Are you sure you want to delete this report?',
        onPublishingNotReadyEntry:
          'Only items with a "Ready" status can be published. Please drag the card to the "Ready" column to enable publishing.',
        onPublishEntry: 'Are you sure you want to publish this report?',
        draftHeader: 'Drafts',
        inReviewHeader: 'In Review',
        readyHeader: 'Ready',
        currentEntries: '%{smart_count} report |||| %{smart_count} reports',
      },
    },
  };
}
