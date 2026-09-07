import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ValidationLibraryManager from './ValidationLibraryManager.svelte';
import { FakeLibraryService } from '../testing/fakeValidationLibraryService';

describe('ValidationLibraryManager', () => {
  it('single-policy mode renders the policy editor directly, without a policy list', async () => {
    const service = new FakeLibraryService();

    render(ValidationLibraryManager, {
      props: {
        mode: 'single-policy',
        service,
        policyName: 'process-policy',
        policyMeta: { title: 'Process Policy' },
      },
    });

    expect(await screen.findByText('Process Policy')).not.toBeNull();
    expect(screen.queryByText('Validation policies')).toBeNull();
  });

  it('catalogue mode lists, creates and opens policies', async () => {
    const service = new FakeLibraryService();
    service.seedPolicy({
      schemaVersion: '1.0.0',
      name: 'existing',
      title: 'Existing Policy',
      ruleSets: [],
    });

    render(ValidationLibraryManager, { props: { mode: 'catalogue', service } });

    await screen.findByText('existing');
    await fireEvent.click(screen.getByRole('button', { name: '+ New policy' }));
    await fireEvent.input(screen.getByLabelText('Title'), { target: { value: 'Fresh Policy' } });
    await fireEvent.click(screen.getByRole('button', { name: 'Create' }));

    expect(await screen.findByText('Fresh Policy')).not.toBeNull();
    expect(service.policy('fresh-policy')).toBeDefined();
  });

  it('catalogue mode deletes a policy', async () => {
    const service = new FakeLibraryService();
    service.seedPolicy({
      schemaVersion: '1.0.0',
      name: 'existing',
      title: 'Existing Policy',
      ruleSets: [],
    });

    render(ValidationLibraryManager, { props: { mode: 'catalogue', service } });

    await screen.findByText('existing');
    await fireEvent.click(screen.getByRole('button', { name: 'Delete' }));

    expect(await screen.findByText('Nothing here yet.')).not.toBeNull();
    expect(service.policy('existing')).toBeUndefined();
  });
});
