<script lang="ts">
  type BadgeType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

  interface Props {
    label?: string;
    type?: BadgeType;
    icon?: string;
    iconPosition?: 'start' | 'end';
    size?: 'small' | 'medium' | 'large';
    variant?: 'filled' | 'outlined';
  }

  let {
    label = '',
    type = 'default',
    icon = '',
    iconPosition = 'start',
    size = 'medium',
    variant = 'filled'
  }: Props = $props();

  const typeColorMap: Record<BadgeType, { bg: string; text: string; border: string }> = {
    default: {
      bg: '#e0e0e0',
      text: '#212121',
      border: '#bdbdbd'
    },
    primary: {
      bg: 'var(--primary, #1976d2)',
      text: '#ffffff',
      border: '#1565c0'
    },
    success: {
      bg: '#388e3c',
      text: '#ffffff',
      border: '#2e7d32'
    },
    warning: {
      bg: '#f57c00',
      text: '#ffffff',
      border: '#e65100'
    },
    error: {
      bg: 'var(--mdc-theme-error, #d32f2f)',
      text: '#ffffff',
      border: '#c62828'
    },
    info: {
      bg: '#0288d1',
      text: '#ffffff',
      border: '#01579b'
    }
  };

  const sizeMap: Record<'small' | 'medium' | 'large', { padding: string; fontSize: string; iconSize: string }> = {
    small: {
      padding: '4px 8px',
      fontSize: '12px',
      iconSize: '16px'
    },
    medium: {
      padding: '6px 12px',
      fontSize: '14px',
      iconSize: '18px'
    },
    large: {
      padding: '8px 16px',
      fontSize: '16px',
      iconSize: '20px'
    }
  };

  const colors = $derived(typeColorMap[type]);
  const sizes = $derived(sizeMap[size]);

  const finalStyle = $derived.by(() => {
    const baseStyle = `
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: ${sizes.padding};
      font-size: ${sizes.fontSize};
      border-radius: 16px;
      font-weight: 500;
      white-space: nowrap;
    `;

    const filledStyle = `
      background-color: ${colors.bg};
      color: ${colors.text};
      border: none;
    `;

    const outlinedStyle = `
      background-color: transparent;
      color: ${colors.bg};
      border: 1px solid ${colors.border};
    `;

    return baseStyle + (variant === 'filled' ? filledStyle : outlinedStyle);
  });
</script>

<div class="oscd-badge" style={finalStyle}>
  {#if icon && iconPosition === 'start'}
    <span class="icon" style="display: flex; align-items: center; justify-content: center;">
      <i class="material-icons" style="font-size: {sizes.iconSize}; line-height: 1;">
        {icon}
      </i>
    </span>
  {/if}

  {#if label}
    <span class="label">{label}</span>
  {/if}

  {#if icon && iconPosition === 'end'}
    <span class="icon" style="display: flex; align-items: center; justify-content: center;">
      <i class="material-icons" style="font-size: {sizes.iconSize}; line-height: 1;">
        {icon}
      </i>
    </span>
  {/if}
</div>

<style lang="css">
  .oscd-badge {
    transition: all 0.2s ease-in-out;
  }

  .oscd-badge:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  }

  .icon {
    flex-shrink: 0;
  }

  .label {
    flex-shrink: 0;
  }
</style>
