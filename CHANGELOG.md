# Changelog

## [1.5.2] - 2024-07-09

### Added

- Added `README.md` file.
- Added `CHANGELOG.md` file.
- Integrated Sentry for error tracking.

## [1.5.1] - 2024-05-31

### Added

- Added a stream field to the match and segment forms.
- Included streams on the entity management page.
- Displayed streams in all match and segment views.
- Enabled avatar cropping on the user page within the management section.

### Changed

- Updated the avatar crop module.

## [1.5.0] - 2024-05-28

### Added

- Introduced the "Segment" entity at the same level as matches.
- Included segments on the entity management page.
- Displayed segments in all calendar views.

### Changed

- Renamed several entities:
    - "Tournament" to "Event" (changed everywhere).
    - "Match" to "Segment" (changed only in the calendar column view).
    - "Analytics" to "Analysts" (changed everywhere).
    - "Commentators" to "Casters" (changed everywhere).

## [1.4.3] - 2024-05-13

### Added

- Added a setup field to the match form.
- Included setups on the entity management page.
- Displayed setups in all match views.

## [1.4.2] - 2024-05-01

### Added

- Divided language blocks in the match creation form into multiple sub-blocks and added the ability to copy and paste
  the information of an entire sub-block.
- Implemented user session configuration saving.

### Changed

- Changed the field for adding backup commentators in the match form to a multi-select dropdown.

## [1.4.1] - 2024-04-22

### Added

- Included backup commentators and host analysts in the match details.

### Changed

- Updated the design of the match card in the mobile version.
- Increased the avatar size across the entire application.
- Set the default value for the broadcast language in the language block of the match form to "UA".

## [1.4.0] - 2024-04-05

### Added

- Enabled clicking on a match in the general calendar list to navigate directly to the match editing page.
- Implemented return to the specific tournament position on the page when clicking the "back" button from the tournament
  page.
- Added display of corporate events in the general list on mobile devices.
- Added breadcrumbs for mobile views.

### Fixed

- Corrected the divider lines between matches.

## [1.3.0] - 2024-03-22

### Added

- Added mobile view for the quarterly and yearly calendar display pages.
- Added mobile view for the tournament page.
- Added mobile view for the corporate event page.

## [1.2.0] - 2024-03-15

### Added

- Implemented cache update for the PWA when a new version of the application is released.
- Added mobile view for the main menu.
- Added mobile view for the login pages.
- Added mobile view for the daily and weekly calendar display pages.
- Added mobile view for the user profile page.

## [1.1.1] - 2024-01-24

### Fixed

- Corrected the update of time slots in the match form.
- Fixed the label of the branding update button.

## [1.1.0] - 2024-01-12

### Added

- Introduced an entity management page for administrators.
- Implemented notifications and indicators for overlapping employee shifts in the match creation and editing forms.
- Enabled the upload of .svg images for tournaments.

### Changed

- Updated the default landing page after authentication and authorization to the "Day" page.

### Fixed

- Corrected an issue with improper user session saving.
- Fixed incorrect display of language blocks in the match creation and editing forms.

## [1.0.1] - 2023-12-11

### Fixed

- Resolved an issue where necessary fields were not saved in entity creation forms when the "create another one"
  checkbox was active.

### Added

- Introduced tournament grading by "Tier" from 1 to 3 and implemented sorting by "Tier" in all calendar views.
- Added the "Tier" field to the tournament creation and update forms.

### Changed

- Made the "Language" field in the match form mandatory if any fields in the related block are filled out.
